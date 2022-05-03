package ca.uwindsor.ase.localservicemarket.entity;


import javax.persistence.*;

@Entity
@Table(name = "service_provider")
public class ServiceProvider {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String title;
    private String description;
    private String volunteer;
    private String skill;

    public ServiceProvider() {
    }

    public ServiceProvider( String name, String title, String description, String volunteer, String skill) {

        this.name = name;
        this.title = title;
        this.description = description;
        this.volunteer = volunteer;
        this.skill = skill;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    public String getName() {
        return name;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }

    public void setName(String name) {
        this.name = name;
    }


    @Override
    public String toString() {
        return "ServiceProvider{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", volunteer='" + volunteer + '\'' +
                '}';
    }
}

