import Card from "../../core/Card";

export default function Section(prop) {
  console.log(prop);
  return (
    <div className="flex wrap">
      <Card job="Operations" company="Avin express" />
      <Card job="Operations" company="Avin express" />
      <Card job="Operations" company="Avin express" />
    </div>
  );
}
