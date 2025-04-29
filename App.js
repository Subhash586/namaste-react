import React from "react";
import ReactDom from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/021/812/963/non_2x/healthy-food-logo-design-template-with-carrot-love-perfect-for-business-company-mobile-app-restaurant-etc-free-vector.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contanct us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
/*const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iplzq141nnyv4ftvgjk3"
      />
      <h3>{resData.card.info.name}</h3>
      <h4> {resData.card.info.cuisines}</h4>
      <h4>{resData.card.info.avgRating}</h4>
      <h4>{resData.card.info.sla.deliveryTime}</h4>
    </div>
  );
};*/

const RestaurantCard = (props) => {
  const { resData } = props;
  const { info } = resData.card; // Extract the 'info' object from 'card'
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iplzq141nnyv4ftvgjk3"
      />
      <h3>{info.name}</h3>
      <h4>{info.cuisines.join(", ")}</h4>
      <h4>{info.avgRating}</h4>
      <h4>{info.sla.deliveryTime} mins</h4>
    </div>
  );
};

const resObj = [
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "7224",
        name: "Santosh Dhaba Exclusive",
        city: "3",
        slugs: {
          restaurant: "santosh-dhaba-banjara-road-no-12-banjara-hills",
          city: "hyderabad",
        },
        cloudinaryImageId: "v1ao5r5o3ph0xuz48cym",
        address:
          "8-2-629/1/2, Opposite Pension Office, Road 12, Banjara Hills, Hyderabad",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "30000",
        costForTwoMessage: "₹300 FOR TWO",
        cuisines: ["Biryani", "Chinese", "Italian"],
        avgRating: 4.3,
        feeDetails: {},
        avgRatingString: "4.3",
        totalRatingsString: "79K+",
        adTrackingId:
          "cid=28089947~p=1~adgrpid=28089947#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=7224~plpr=SEARCH#RESTAURANT~st=north indian~eid=aa787adf-2fc4-4247-83b5-47cdb54a8baf~srvts=1745681156401",
        sla: {
          deliveryTime: 31,
          minDeliveryTime: 30,
          maxDeliveryTime: 35,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          rainMode: "RAIN_MODE_NONE",
          slaString: "30-35 MINS",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          opened: true,
          restaurantClosedMeta: {},
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        aggregatedDiscountInfoV3: {
          header: "66% OFF",
          subHeader: "UPTO ₹126",
          headerTypeV2: "HEADER_TYPE_V2_CRICKET_MATCH",
          logoCtx: {
            text: "BENEFITS",
          },
        },
      },
    },
  },
  ,
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      info: {
        id: "840147",
        name: "Indian Darbar Restaurant",
        city: "3",
        slugs: {
          restaurant: "indian-darbar-restaurant-himayath-nagar-himayath-nagar",
          city: "hyderabad",
        },
        cloudinaryImageId: "313774ada0dc4f878df143b7d7a095f0",
        address:
          "3-5-1063 To 1081,Harivihar Colony,Beside Deepak Theatre,Narayanaguda, Amberpet Circle No 16, Hyderabad, Telangana",
        locality: "Narayanaguda",
        areaName: "Narayanaguda",
        costForTwo: "60000",
        costForTwoMessage: "₹600 FOR TWO",
        cuisines: [
          "Biryani",
          "Chinese",
          "North Indian",
          "Tandoor",
          "Seafood",
          "Fast Food",
        ],
        avgRating: 4,
        feeDetails: {},
        avgRatingString: "4.0",
        totalRatingsString: "1.6K+",
        adTrackingId:
          "cid=28219146~p=2~adgrpid=28219146#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=840147~plpr=SEARCH#RESTAURANT~st=north indian~eid=810c1a51-734b-45b6-a7bd-f25ea0208d69~srvts=1745681156401",
        sla: {
          deliveryTime: 36,
          minDeliveryTime: 35,
          maxDeliveryTime: 40,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          rainMode: "RAIN_MODE_NONE",
          slaString: "35-40 MINS",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
      },
    },
  },
];

/*const Body =() =>{
    return(
        <div className="body">
                <RestaurantCard resData={resObj} />
                <RestaurantCard resData={resObj} />
                <RestaurantCard resData={resObj}/>
                <RestaurantCard resData={resObj}/>
                
            </div>
        
    )
}*/

const Body = () => {
  return (
    <div className="body">
      {resObj.map((res, index) => (
        <RestaurantCard key={index} resData={res} />
      ))}
    </div>
  );
};
root.render(<AppLayout />);

//episode 4 at left 42 min

dictionary_structure = {
  "bronze": {
      "current": {
          "DOCUMENTS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_raw_bronze/documents/main/",
              "purge_type": "based_on_document_date"        
          },
          "SENTENCES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_raw_bronze/sentences/main/",
              "purge_type": "based_on_document_date"
          },
          "SENTENCES_CLASSIFICATIONS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_raw_bronze/sentences/classifications/",
              "purge_type": "based_on_document_date"
          }
      },
      "historical": {
          "DOCUMENTS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_raw_bronze/documents/main/",
              "purge_type": "based_on_document_date"
          },
          "SENTENCES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_raw_bronze/sentences/main/",
              "purge_type": "based_on_document_date"
          },
          "SENTENCES_CLASSIFICATIONS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_raw_bronze/sentences/classifications/",
              "purge_type": "based_on_document_date"
          }
      }
  },
  "silver": {
      "current": {
          "DOCUMENTS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_refined_silver/documents/main/",
              "purge_type": "based_on_document_date",
              "cot": {
                  "bronzePath": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_raw_bronze/",
                  "bronzeStat": "stat1",
                  "bronzeFilter": "filter1",
                  "silverStat": "stat2"
              }
          },
          "SENTENCES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_refined_silver/sentences/main/",
              "purge_type": "based_on_document_date",
              "cot": {
                  "bronzePath": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_raw_bronze/",
                  "bronzeStat": "stat1",
                  "bronzeFilter": "filter1",
                  "silverStat": "stat2"
              }
          },
          "SENTENCES_CLASSIFICATIONS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_refined_silver/sentences/classifications/",
              "purge_type": "based_on_document_date",
              "cot": {
                  "bronzePath": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset_crnt/delta_raw_bronze/",
                  "bronzeStat": "stat1",
                  "bronzeFilter": "filter1",
                  "silverStat": "stat2"
              }
          }
      },
      "historical": {
          "DOCUMENTS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_refined_silver/documents/main/",
              "purge_type": "based_on_document_date",
              "cot": {
                  "bronzePath": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_raw_bronze/",
                  "bronzeStat": "stat1",
                  "bronzeFilter": "filter1",
                  "silverStat": "stat2"
              }
          },
          "SENTENCES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_refined_silver/sentences/main/",
              "purge_type": "based_on_document_date",
              "cot": {
                  "bronzePath": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_raw_bronze/",
                  "bronzeStat": "stat1",
                  "bronzeFilter": "filter1",
                  "silverStat": "stat2"
              }
          },
          "SENTENCES_CLASSIFICATIONS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_refined_silver/sentences/classifications/",
              "purge_type": "based_on_document_date",
              "cot": {
                  "bronzePath": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_raw_bronze/",
                  "bronzeStat": "stat1",
                  "bronzeFilter": "filter1",
                  "silverStat": "stat2"
              }
          }
      }
  },
  "gold": {
      "fact": {
          "FACT_CALL_METADATA": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_CALL_METADATA/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_CHAT_METADATA_SURVEY": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_CHAT_METADATA_SURVEY/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_CHUB_PHONECALLACTIVITY": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_CHUB_PHONECALLACTIVITY/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_DOCUMENTS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_DOCUMENTS/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_DOCUMENTS_CDA": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_DOCUMENTS_CDA/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_RSLN_AUTHORIZATION_CLAIMS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_RSLN_AUTHORIZATION_CLAIMS/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_RSLN_COMPLAINT_METADATA": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_RSLN_COMPLAINT_METADATA/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_RSLN_COST_SHARING_PROGRAM": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_RSLN_COST_SHARING_PROGRAM/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_RSLN_DAYS_BEFORE_AFTER": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_RSLN_DAYS_BEFORE_AFTER/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_RSLN_PROVIDER": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_RSLN_PROVIDER/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_SENTENCES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_SENTENCES/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_SENTENCES_CLASSIFICATIONS": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_SENTENCES_CLASSIFICATIONS/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_SENTENCES_ENRICHMENT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_SENTENCES_ENRICHMENT/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_SYSTEM_ATTRIBUTES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_SYSTEM_ATTRIBUTES/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_VOC_SURVEY": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_VOC_SURVEY/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          },
          "FACT_VOC_SURVEY_CALL_ATTRIBUTES": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/FACT_VOC_SURVEY_CALL_ATTRIBUTES/",
              "purge_type": "based_on_document_date",
              "cot": "document_id"
          }
      },
      "dim": {
          "DIM_AGENT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_AGENT/",
              "purge_type": "based_on_document_date",
              "surrogate_key": "agent_key",
              "connectedFactPath": ""
          },
          "DIM_CHUB_CAMPAIGN": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CHUB_CAMPAIGN/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "chub_campaign_key",
              "connectedFactPath": ""
          },
          "DIM_CHUB_CONTACT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CHUB_CONTACT/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "chub_contact_key",
              "connectedFactPath": ""
          },
          "DIM_CHUB_PERMISSIONTOCONTACT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CHUB_PERMISSIONTOCONTACT/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "chub_ptc_key",
              "connectedFactPath": ""
          },
          "DIM_CHUB_PRODUCT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CHUB_PRODUCT/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "chub_product_key",
              "connectedFactPath": ""
          },
          "DIM_CHUB_PROSPECT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CHUB_PROSPECT/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "chub_prospect_key",
              "connectedFactPath": ""
          },
          "DIM_CHUB_USER": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CHUB_USER/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "chub_user_key",
              "connectedFactPath": ""
          },
          "DIM_CRM_CASE": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CRM_CASE/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "crm_case_key",
              "connectedFactPath": ""
          },
          "DIM_CRM_INTERACTION": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CRM_INTERACTION/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "crm_interaction_key",
              "connectedFactPath": ""
          },
          "DIM_CUSTOMER_COVERAGE_PLAN": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_CUSTOMER_COVERAGE_PLAN/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "member_coverage_plan_key",
              "connectedFactPath": ""
          },
          "DIM_MEDCR_DUAL_STAT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_MEDCR_DUAL_STAT/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "medcr_dual_stat_key",
              "connectedFactPath": ""
          },
          "DIM_MEMBER": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_MEMBER/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "member_key",
              "connectedFactPath": ""
          },
          "DIM_MEMBER_COVERAGE_PLAN": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_MEMBER_COVERAGE_PLAN/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "member_coverage_plan_key",
              "connectedFactPath": ""
          },
          "DIM_RSLN_CUSTOMER_COVERAGE_PLAN": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_RSLN_CUSTOMER_COVERAGE_PLAN/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "rsln_customer_coverage_plan_key",
              "connectedFactPath": ""
          },
          "DIM_RSLN_ENROLLMENT_AGENT": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_RSLN_ENROLLMENT_AGENT/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "rsln_enrollment_agent_key",
              "connectedFactPath": ""
          },
          "DIM_RSLN_MEMBER": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_RSLN_MEMBER/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "member_key",
              "connectedFactPath": ""
          },
          "DIM_SYSTEM_INTEGRATION": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_SYSTEM_INTEGRATION/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "system_integration_key",
              "connectedFactPath": ""
          },
          "DIM_VETERAN": {
              "path": "abfss://edpa-retail-idea-2-prod@edpashrdasasa0prod0.dfs.core.windows.net/idea_data_asset/delta_gold/DIM_VETERAN/",
              "purge_type": "based_on_surrogate_key",
              "surrogate_key": "veteran_key",
              "connectedFactPath": ""
          }
      }
  }
}
  