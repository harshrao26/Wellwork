import React, { useEffect, useState } from "react";
import MyContext from "./myContext";
import { toast } from "react-toastify";

// export const base_url_2 = "http://localhost:3004/api/"
// export const base_url = "https://altisapi.workataltis.com/api/";

export const base_url = "https://wellworkapi.wellwork.space/api/";
export const base_url_2 = base_url;
// export const 


function MyState(props) {
  const [meetingEventList, setMeetingEventList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [review_list, setReview_list] = useState([]);
  const [gallery_list, setGallery_list] = useState([]);
  const [unforgettable_list, setUnforgettable_list] = useState([]);
  const [chooseAltis_list, setChooseAltis_list] = useState([]);
  const [leaders_list, setLeaders_list] = useState([]);
  const [company_logos, setCompany_logos] = useState([]);
  const [amentiesFaci_list, setAmentiesFaci_list] = useState([]);
  const [location_list, setLocation_list] = useState([]);
  const [products_list, setProducts_list] = useState([]);
  const [cities_list, setCities_list] = useState([]);

  const getMeetingAndEvent = async () => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}meetingandevents/list`,
        {
          method: "GET",
        }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setMeetingEventList(res.data);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getReviewList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}reviews/list/pageName/${name}`,
        {
          method: "GET",
        }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setReview_list(res.data);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getGalleryList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}eventGallery/list/${name}`,
        {
          method: "GET",
        }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setGallery_list(res.data);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getUnforgettableList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}unforgatableEvent/list`,
        {
          method: "GET",
        }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setUnforgettable_list(res.data);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getChooseAltisList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}whyChooseAltis/list/Home`,
        {
          method: "GET",
        }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setChooseAltis_list(res.data);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getLeadersList = async () => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}leaders/list`,
        {
          method: "GET",
        }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setLeaders_list(res.data);
      } else {
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getBrandsList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url_2}members-logos/list/${name}`,
        { method: "GET" }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setCompany_logos(res.data);
      } else {
        setCompany_logos([]);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getAmentiesFaciList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}amenAndFaci/list/${name}`,
        { method: "GET" }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setAmentiesFaci_list(res.data);
      } else {
        setAmentiesFaci_list([]);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getLocationList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}location-workspace/list`,
        { method: "GET" }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setLocation_list(res.data);
      } else {
        setLocation_list([]);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getProductsList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url_2}products/list`,
        { method: "GET" }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setProducts_list(res.data);
      } else {
        setProducts_list([]);
      }
    } catch (error) {
      setLoading(false);
    }
  };
  const getCityList = async (name) => {
    try {
      setLoading(true);
      const responce = await fetch(
        `${base_url}city/list`,
        { method: "GET" }
      );
      const res = await responce.json();
      setLoading(false);
      if (res.success) {
        setCities_list(res.data);
      } else {
        setCities_list([]);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMeetingAndEvent();
    getReviewList("Home");
    getGalleryList("Why Altis");
    getUnforgettableList();
    getChooseAltisList();
    getLeadersList();
    getBrandsList("Home");
    // getAmentiesFaciList("LOCATION");
    getLocationList();
    getProductsList();
    getCityList();
  }, []);

  return (
    <MyContext.Provider
      value={{
        meetingEventList,
        review_list,
        getReviewList,
        gallery_list,
        getGalleryList,
        unforgettable_list,
        chooseAltis_list,
        leaders_list,
        company_logos,
        getAmentiesFaciList,
        amentiesFaci_list,
        location_list,
        products_list,
        cities_list,
        getBrandsList,
        getProductsList,
        getLocationList,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;
