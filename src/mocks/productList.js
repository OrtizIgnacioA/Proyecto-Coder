import img1 from '../assets/static/img1.jpeg';
import img2 from '../assets/static/img2.jpeg';
import img3 from '../assets/static/img3.jpeg';
import img4 from '../assets/static/img4.jpeg';
import img5 from '../assets/static/img5.jpeg';

const productList = [
  {
    id: 1,
    name: 'Stout',
    price: 500,
    description:
      'Una Stout es un estilo de cerveza muy oscura de alta fermentación originario del antiguo Londres. Presentan poca o ninguna lupulización y suelen ser en general cervezas bastante secas. El color oscuro, proviene de la malta muy tostada. Son cremosas y muy agradables, con una espuma densa.',
    images: img1,
    stock: 100,
  },
  {
    id: 2,
    name: 'IPA',
    price: 400,
    description:
      'La India pale ale (comúnmente abreviado como IPA) es un estilo de cerveza de tradición inglesa que se caracteriza como una ale​ pálida y espumosa con un alto nivel de alcohol y de lúpulo. ... ​ Estos ambientes hacían que la cerveza se volviese caduca y agria.',
    images: img2,
    stock: 100,
  },
  {
    id: 3,
    name: 'APA',
    price: 350,
    description:
      'Las APA son la versión americana de las English Pale Ale y se clasifican dentro del grupo de las American Ale. Son cervezas de alta fermentación con un aroma y sabor marcado a lúpulos americanos, bastante alto debido al usual dry hopping. Suele tener caracteres cítricos y tienen baja maltosidad.',
    images: img3,
    stock: 100,
  },
  {
    id: 4,
    name: 'Porter',
    price: 600,
    description:
      'Caracterizada por su color oscuro, que va del marrón rojizo al negro, y por un sabor intenso, donde se destaca la malta y el lúpulo, esta cerveza Ale de fermentación alta, conocida como estilo porter, suele ser seca y con un contenido alcohólico que oscila entre los 4.5 y 5.5%',
    images: img4,
    stock: 100,
  },
  {
    id: 5,
    name: 'Trigo',
    price: 550,
    description:
      'La cerveza de trigo es una cerveza, generalmente de fermentación alta o ale, que se elabora con una gran proporción de trigo en relación con la cantidad de cebada malteada.',
    images: img5,
    stock: 100,
  },
];

export default productList;
