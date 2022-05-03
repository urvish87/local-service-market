package ca.uwindsor.ase.localservicemarket.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Date;

@Entity
@Table(name = "Requests")
public class Request {

    @Id
    @Column(name="RequestID")
    private int requestId;
    @Column(name="RequestTitle")
    private String title;
    @Column(name="RequestVideoLink")
    private String youtubeLink;
    @Column(name="Description")
    private String description;
    @Column(name="RequestStatusID")
    private int requestStatusId;
    @Column(name="RequestDate")
    private Date requestDate;
    @Column(name="CloseDate")
    private Date closeDate;
    @Column(name="ServiceSeekerID")
    private int serviceSeekerId;
    @Column(name="ServiceProviderID")
    private int serviceProviderId;

    public Request() {
    }

    public Request(int requestId, String title, String youtubeLink, String description, int requestStatusId, Date requestDate, Date closeDate, int serviceSeekerId, int serviceProviderId) {
        this.requestId = requestId;
        this.title = title;
        this.youtubeLink = youtubeLink;
        this.description = description;
        this.requestStatusId = requestStatusId;
        this.requestDate = requestDate;
        this.closeDate = closeDate;
        this.serviceSeekerId = serviceSeekerId;
        this.serviceProviderId = serviceProviderId;
    }

    public Request(String title, String youtubeLink, String description, int requestStatusId, Date requestDate, Date closeDate, int serviceSeekerId, int serviceProviderId) {
        this.title = title;
        this.youtubeLink = youtubeLink;
        this.description = description;
        this.requestStatusId = requestStatusId;
        this.requestDate = requestDate;
        this.closeDate = closeDate;
        this.serviceSeekerId = serviceSeekerId;
        this.serviceProviderId = serviceProviderId;
    }

    public int getRequestId() {
        return requestId;
    }

    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getYoutubeLink() {
        return youtubeLink;
    }

    public void setYoutubeLink(String youtubeLink) {
        this.youtubeLink = youtubeLink;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getRequestStatusId() {
        return requestStatusId;
    }

    public void setRequestStatusId(int requestStatusId) {
        this.requestStatusId = requestStatusId;
    }

    public Date getRequestDate() {
        return requestDate;
    }

    public void setRequestDate(Date requestDate) {
        this.requestDate = requestDate;
    }

    public Date getCloseDate() {
        return closeDate;
    }

    public void setCloseDate(Date closeDate) {
        this.closeDate = closeDate;
    }

    public int getServiceSeekerId() {
        return serviceSeekerId;
    }

    public void setServiceSeekerId(int serviceSeekerId) {
        this.serviceSeekerId = serviceSeekerId;
    }

    public int getServiceProviderId() {
        return serviceProviderId;
    }

    public void setServiceProviderId(int serviceProviderId) {
        this.serviceProviderId = serviceProviderId;
    }
}
