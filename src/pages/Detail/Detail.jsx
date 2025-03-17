import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './Detail.module.css';
import Carousel from '@components/Carousel/Carousel';
import { getModelById } from '@services/modelService';

import detail1 from '@assets/detail1.png'
import detail2 from '@assets/detail2.png'

const Detail = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    const fetchModel = async () => {
      try {
        const data = await getModelById(id);
        setModel(data);
      } catch (error) {
        console.error('Error fetching model:', error);
      }
    };
    fetchModel();
  }, [id]);

  if (!model) return <p>Loading...</p>;

  return (
    <div className={style.container}>
      <div className={style.portrait}>
        <img src={model.photo} alt={model.name} className={style.image} />
        <div>
          <h4 className={style.model}>{model.name}</h4>
          <h1 className={style.title}>Preparada para cualquier desafío</h1>
          <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum itaque porro repellendus eius mollitia dolores aliquam consequatur.</p>
        </div>
      </div>

      <Carousel />

      <div className={style.sectionbox}>
        <div className={style.section}>
          <img src={detail2} alt={model.name} className={style.sectionimage} />
          <div>
            <h4 className={style.sectionmodel}>{model.name}</h4>
            <p className={style.sectiontext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum itaque porro repellendus eius mollitia dolores aliquam consequatur. Laboriosam, temporibus excepturi quam vitae adipisci beatae, eos voluptatibus alias natus veniam illum!</p>
          </div>
        </div>
        <div className={style.section}>
          <img src={detail1} alt={model.name} className={style.sectionimage} />
          <div>
            <h4 className={style.sectionmodel}>{model.name}</h4>
            <p className={style.sectiontext}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum itaque porro repellendus eius mollitia dolores aliquam consequatur. Laboriosam, temporibus excepturi quam vitae adipisci beatae, eos voluptatibus alias natus veniam illum!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
