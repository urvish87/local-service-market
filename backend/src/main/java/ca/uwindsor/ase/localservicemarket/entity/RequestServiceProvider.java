package ca.uwindsor.ase.localservicemarket.entity;

public class RequestServiceProvider {


    private String name;
    private String title;
    private String description;
    private String volunteer;
    private String skill;


    public RequestServiceProvider(String name, String title, String description, String volunteer, String skill) {
        this.name = name;
        this.title = title;
        this.description = description;
        this.volunteer = volunteer;
        this.skill = skill;
    }

    public RequestServiceProvider() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVolunteer() {
        return volunteer;
    }

    public void setVolunteer(String volunteer) {
        this.volunteer = volunteer;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }
}
