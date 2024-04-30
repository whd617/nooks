export const useNavigation = () => {
	const [state, setState] = useState({})
	useEffect(()=> {
	  function success(position) {
		console.log(position.heading  );
		let latitude= position.coords.latitude
		let longitude= position.coords.longitude
		setState({latitude,longitude})
	  }
	  function error() {
		alert("죄송합니다. 위치 정보를 사용할 수 없습니다.")
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