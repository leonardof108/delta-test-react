import Navbar from "../src/components/Navbar/Navbar";
import Card from "../src/components/Card/Card";
import style from "../styles/Home.module.css";
import Banner from "../src/components/Banner/Banner";

const data = [
  {
    name: "Souza Costa",
    date: "18 de Fevereiro de 2021",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    profile: "/assets/profile1.png",
    image: "/assets/card1.png",
  },
  {
    name: "Juninho",
    date: "18 de Fevereiro de 2021",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    profile: "/assets/profile2.png",
    image: "/assets/card2.png",
  },
  {
    name: "Nicolas",
    date: "18 de Fevereiro de 2021",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    profile: "/assets/profile3.png",
    image: "/assets/card3.png",
  },
  {
    name: "Jenifer",
    date: "18 de Fevereiro de 2021",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    profile: "/assets/profile3.png",
    image: "/assets/card4.png",
  },
  {
    name: "Austin",
    date: "18 de Fevereiro de 2021",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    profile: "/assets/profile1.png",
    image: "/assets/card1.png",
  },
  {
    name: "Carla",
    date: "18 de Fevereiro de 2021",
    title: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    profile: "/assets/profile2.png",
    image: "/assets/card2.png",
  },
];

export default function Page() {
  return (
    <div className={style.container}>
      <Navbar />
      <Banner />
      <div className={style.card_container}>
        {data.map((item) => (
          <Card info={item} />
        ))}
      </div>
    </div>
  );
}
