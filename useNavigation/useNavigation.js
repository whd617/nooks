import { useEffect, useState } from "react";

export const useNavigation = () => {
	const [state, setState] = useState({})
	useEffect(()=> {
	  function success(position) {
		let latitude= position.coords.latitude
		let longitude= position.coords.longitude
		setState({latitude,longitude})
	  }
	  function error() {
		throw Error ("Doesn't find a position")
	  }
	  const options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0,
	  };
	  const watchId = navigator.geolocation.watchPosition(success,error,options);
	  return ()=> {
		navigator.geolocation.clearWatch(watchId);
	  };
	},[])
	if(!("geolocation" in navigator)) {
	  return;    
	};
	return state;
  };