export const Planets = ({ isGasPlanet, name }) => {
  // return <div className={styles.App}>{props.name}</div>;
  return <>{isGasPlanet ? <h2>{name}</h2> : ""}</>;
};
