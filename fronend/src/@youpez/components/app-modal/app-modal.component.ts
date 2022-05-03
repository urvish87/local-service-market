import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  HostListener
} from '@angular/core'

@Component({
  selector: 'youpez-modal',
  templateUrl: './app-modal.component.html',
  styleUrls: ['./app-modal.component.scss']
})
export class AppModalComponent implements OnInit, AfterViewInit {

  @HostListener('window:keyup', ['$event']) keyEvent(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.onClose()
    }
  }

  @ViewChild('mainElement') mainElem: ElementRef
  @Output() close = new EventEmitter()

  public loading: boolean = true

  constructor() {
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    if (!this.mainElem) return;
    setTimeout(() => {
      this.mainElem.nativeElement.focus()
    }, 200)
    setTimeout(() => {
      this.loading = false
    }, 700)
  }

  onClose() {
    this.close.next(true)
  }
  onOK() {
    this.close.next(true)
  }

}
