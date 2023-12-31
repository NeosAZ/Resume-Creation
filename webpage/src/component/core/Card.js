/* This is only the outline of the Card. 
prop.Cardinfo */

export default function Card(prop) {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md px-8 py-10 h-[400px]">
      {prop.CardInfo}
    </div>
  );
}
