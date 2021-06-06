import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Planet() {
  const planets = useSelector((state) => state.planets);
  const params = useParams();
  const planet = planets.find((p) => p.id === parseInt(params["id"], 10));
  setTimeout(()=>{
    Array.from(document.getElementsByClassName('hidden')).map(ele => ele.className = 'appear')
  }, 2000)
  return (
    <div id={planet.name} className='zoomed-planet'>
      <h1 className='hidden'>{planet.name}</h1>
      <p className='hidden'>{planet.description}</p>
    </div>
  );
}
