package dineeazy.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class TableFeatureEntity
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int featureId;
	@Column
	private String featureName;
	
    @JsonIgnore
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="restaurantInfoId")
	private RestaurantInfoEntity restInfo2;
	
	public TableFeatureEntity()
	{
		
	}

	public TableFeatureEntity(int featureId, String featureName) {
		super();
		this.featureId = featureId;
		this.featureName = featureName;
	}

	public int getFeatureId() {
		return featureId;
	}

	public void setFeatureId(int featureId) {
		this.featureId = featureId;
	}

	public String getFeatureName() {
		return featureName;
	}

	public void setFeatureName(String featureName) {
		this.featureName = featureName;
	}

	public RestaurantInfoEntity getRestInfo2() {
		return restInfo2;
	}

	public void setRestInfo2(RestaurantInfoEntity restInfo2) {
		this.restInfo2 = restInfo2;
	}

	@Override
	public String toString() {
		return "TableFeatureEntity [featureId=" + featureId + ", featureName=" + featureName + ", restInfo2="
				+ restInfo2 + "]";
	}
	
}
