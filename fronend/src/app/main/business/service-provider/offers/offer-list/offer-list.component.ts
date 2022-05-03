import {Component, OnInit} from '@angular/core'
import {ColDef, GridOptions} from "@ag-grid-community/core"
import {InfiniteRowModelModule} from "@ag-grid-community/infinite-row-model"
import {ClientSideRowModelModule} from "@ag-grid-community/client-side-row-model"
import {HttpClient} from "@angular/common/http"

const categories = {
  'Utilities': '#edb879',
  'Technology Services': '#1979a9',
  'Transportation': '#e07b39',
  'Retail Trade': '#80391e',
  'Producer Manufacturing': '#042f66',
  'Health Technology': '#042f66',
  'Health Services': '#521799',
  'Finance': '#991717',
  'Energy Minerals': '#805C33',
  'Electronic Technology': '#003A52',
  'Consumer Services': '#008580',
  'Consumer Non-Durables': '#D1C400',
  'Consumer Durables': '#850200',
  'Communications': '#001FD1',
}

const titleCellRenderer = (params) => {
  const {value} = params
  const split = value.split('|')

  return `
    <div class="app-row app-row--center overflow-hidden">
      <div>
        <div class="app-expressive-heading-01">${split[0]}</div>
        <div class="text-overflow-ellipsis app-caption-01">${split[1]}</div>
      </div>
    </div>
  `
}

const sectorCellRenderer = (params) => {
  const {value} = params
  const color = categories[value]

  return `
    <div class="flex">
    <div style="width:4px;height:16px;background: ${color};margin-right:5px;"></div>
      ${value}
    </div>
  `
}

const statusRenderer = (params) => {
  const value = params.value
  return value === 'rejected' ? {backgroundColor: 'rgba(255, 212, 219, .5)'} : (value === 'accepted' ? {backgroundColor: 'rgba(198, 255, 189, .5)'} : {backgroundColor: 'rgb(241, 239, 189, .5)'})
}

const createRowHelper = (rowData, columns) => {
  let data = [];
  for(let i = 0 ; i < columns.length; i++) data[columns[i]] = rowData[i];
  return data;
}

const parseCSV = (csv) => {
  return csv.split('\n').map(row => row.split(',')).filter(row => row[0])
}

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {

  public modules = [InfiniteRowModelModule, ClientSideRowModelModule]
  public gridOptions: GridOptions = {}
  public loading: boolean = false
  public defaultColDef = {}

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.createTable()
  }


  createTable() {
    this.loading = true
    const columnDefs: Array<ColDef> = [
      {
        headerName: 'Request',
        field: 'request_title',
        cellClass: 'cell-flex-middle overflow-hidden',
        cellRenderer: titleCellRenderer,
        width: 550,
        pinned: true,
        checkboxSelection: true,
        headerCheckboxSelection: true,
      },
      {
        headerName: 'Offered Price',
        field: 'offer_price',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right font-bold'
      },
      {
        headerName: 'Current Offers',
        field: 'request_total_offers',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right',
      },
      {
        headerName: 'Status',
        field: 'offer_status',
        headerClass: 'cell-flex-center',
        cellClass: 'cell-flex-middle',
        cellStyle: statusRenderer,
      },
      {
        headerName: 'Category',
        field: 'request_category',
        headerClass: 'cell-flex-right',
        cellClass: 'cell-flex-middle cell-flex-right'
      },
    ]
    this.http.get('assets/data/offers.csv', {responseType: 'text'})
      .subscribe((response) => {
        const rowData = parseCSV(response).map(row => createRowHelper(row, ['request_title', 'offer_price', 'request_total_offers', 'offer_status', 'request_category']))
        this.gridOptions = {
          columnDefs: columnDefs,
          rowData: rowData,
          rowHeight: 40,
          headerHeight: 40,
          rowSelection: 'multiple',
          defaultColDef: {
            editable: true,
            sortable: true,
            resizable: true,
          },
          pagination: true,
          paginationPageSize: 30,
          groupSelectsChildren: true,
        }
        this.loading = false
        setTimeout(() => {
          try {
            this.gridOptions.api.sizeColumnsToFit()
          } catch (error) {

          }

        }, 10)
      })
  }

}
