import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/mono-wheel-robot-svgrepo-com.svg').default,
    description: (
      <>
        Hola soc Arnau Domenech Blanquer
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/mono-svgrepo-com.svg').default,
    description: (
      <>
        Estic estudiant 1er de DAW al IES Lluis Simarro a Xativa, Valencia.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/age-18-svgrepo-com.svg').default,
    description: (
      <>
        Aquest projecte forma part de la clase de Projecte Intermodular, impartida per Raul Valls Aranda.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
