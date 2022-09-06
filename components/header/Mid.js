import React from "react";
import style from "../../styles/Header.module.css";
import { BsList } from "react-icons/bs";

export default function Mid() {
  const categories = [
    {
      title: "Primo Video",
      ulink:
        "https://www.amazon.com/Amazon-Video/b/?ie=UTF8&node=2858778011&ref_=nav_cs_prime_video",
    },
    {
      title: "Health and Household",
      ulink:
        "https://www.amazon.com/health-personal-care-nutrition-fitness/b/?ie=UTF8&node=3760901&ref_=nav_cs_hpc",
    },
    {
      title: "Kindle Books",
      ulink:
        "https://www.amazon.com/Kindle-eBooks/b/?ie=UTF8&node=154606011&ref_=nav_cs_kindle_books",
    },
    {
      title: "Pet Supplies",
      ulink:
        "https://www.amazon.com/pet-shops-dogs-cats-hamsters-kittens/b/?ie=UTF8&node=2619533011&ref_=nav_cs_pets",
    },
    {
      title: "Books",
      ulink:
        "https://www.amazon.com/books-used-books-textbooks/b/?ie=UTF8&node=283155&ref_=nav_cs_books",
    },
    {
      title: "Pharmacy",
      ulink:
        "https://www.amazon.com/Party-Dont-Start-Til-Croc/dp/B08QV53WTG/ref=d_pd_sbs_sccl_1_4/136-0670463-5853540?pd_rd_w=3t6bF&content-id=amzn1.sym.e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_p=e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_r=NE79YG84YXA8A55AY6JC&pd_rd_wg=Bg8fM&pd_rd_r=26f9f66c-0e02-4089-9c85-ed5885bda6e4&pd_rd_i=B08QV53WTG&customId=B0752XJYNL&th=1&psc=1",
    },
    {
      title: "Amazon Launchpad",
      ulink:
        "https://www.amazon.com/Party-Dont-Start-Til-Croc/dp/B08QV53WTG/ref=d_pd_sbs_sccl_1_4/136-0670463-5853540?pd_rd_w=3t6bF&content-id=amzn1.sym.e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_p=e8ae2edd-d546-4619-bda8-82a9f33e83eb&pf_rd_r=NE79YG84YXA8A55AY6JC&pd_rd_wg=Bg8fM&pd_rd_r=26f9f66c-0e02-4089-9c85-ed5885bda6e4&pd_rd_i=B08QV53WTG&customId=B0752XJYNL&th=1&psc=1",
    },
  ];

  return (
    <div className={`${style.midhead}`}>
      <div className={`${style.allcat}`}>
        <BsList className={`${style.iconlist}`} />
      </div>
      <ul className={`${style.cats}`}>
        {categories.map((e) => {
          return (
            <li className={`${style.li}`}>
              <a className={`${style.li}`} href={e.ulink}>
                {e.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
