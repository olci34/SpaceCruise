import { useSelector } from "react-redux";
import { useParams } from "react-router";

export default function Planet() {
  const planets = useSelector((state) => state.planets);
  const params = useParams();
  const planet = planets.find((p) => p.id === parseInt(params["id"], 10));

  return (
    <div id={planet.name} >
      <strong>{planet.name}</strong>
    </div>
  );
}
