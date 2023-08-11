import Link from "next/link";
import style from "./Card.module.css";
import Image from "next/image";

interface infoProps {
  name: string;
  image: string;
  title: string;
  profile: string;
  date: string;
}

export default function Card({ info }) {
  return (
    <div key={info.name} className={style.card_container}>
      <Link href="#">
        <Image
          src={`${info.image}`}
          width={300}
          height={200}
          className={style.card_image}
          alt="Card image"
        />
      </Link>
      <div className={style.card_content}>
        <Link href="#">
          <p className={style.card_title}>{info.title}</p>
        </Link>
        <div className={style.card_main}>
          <Link href="#">
            <Image
              src={info.profile}
              width={300}
              height={200}
              className={style.card_profile_picture}
              alt="Card image"
            />
          </Link>
          <div className={style.card_info}>
            <Link href="#">
              <p className={style.card_name}>{info.name}</p>
            </Link>
            <p className={style.card_date}>{info.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
