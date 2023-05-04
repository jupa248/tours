import Tour from "./Tour";

const Tours = ({ tours }) => {
  console.log(tours);
  return (
    <section className="tours">
      {tours.map((tour) => {
        const { id, image, info, name, price } = tour;
        return (
          <Tour key={id} image={image} info={info} price={price} name={name} />
        );
      })}
    </section>
  );
};
export default Tours;
