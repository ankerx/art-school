import styles from "./about.module.scss";

import map from "../../assets/map.png";
import MapVector from "../../assets/Vector1.png";
import PhoneVector from "../../assets/Vector2.png";
import FbVector from "../../assets/Vector3.png";
import IgVector from "../../assets/Vector4.png";
import TwitterVector from "../../assets/Vector5.png";

export const About = () => {
  return (
    <section className={styles["about-section"]}>
      <div className={styles.heading}>
        <div>
          {" "}
          <h2 className={styles.title}>Who we are?</h2>
          <div className={styles.container}>
            <div className={styles["text-container"]}>
              <div>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pharetra nulla ornare lacus, accumsan purus sem donec. Vitae
                  ornare sit rhoncus vitae id neque. Non vitae et, pellentesque
                  lacus. Nunc, eu sollicitudin massa senectus eu diam pharetra.
                  Sit nisl quisque eget arcu cursus scelerisque. Aliquam et urna
                  tellus blandit sit nulla nec. Ultricies sapien sit lorem
                  aliquet. Phasellus enim feugiat sed parturient elementum
                  varius ut in vel. Neque egestas magna sed orci, consequat. Sit
                  magnis nunc consequat id proin tortor egestas arcu ac. At
                  faucibus leo et, nisi, sollicitudin. Malesuada sagittis massa,
                  viverra tempor etiam hendrerit eget amet. Odio magna ultrices
                  diam, facilisis. Habitant diam eros molestie pretium.
                </p>
                <p>
                  {" "}
                  Viverra parturient eu tincidunt sem. Aliquet ultrices volutpat
                  orci tristique. Sit eleifend donec bibendum sed fermentum.
                  Amet, sagittis, libero, at nullam vestibulum. Fusce et sit
                  maecenas urna orci felis sodales. Dignissim aliquam at id duis
                  gravida. Nunc sit arcu lectus lorem libero vel vitae
                  adipiscing amet. In cras sed tristique nisl, amet accumsan
                  urna quis. Condimentum laoreet a convallis sit pellentesque
                  laoreet at fringilla. Porttitor ut mi nec cras. Nunc, sit non
                  ipsum aliquam enim. Blandit dictum nunc duis ac faucibus neque
                  feugiat vitae. Quis ac malesuada pulvinar ac cras mollis
                  dictum ullamcorper pretium. Pellentesque ac nunc, eu fermentum
                  erat nunc vel natoque volutpat.
                </p>
                <p>
                  {" "}
                  Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam ut
                  massa, praesent viverra integer massa justo. Vitae
                  pellentesque quis sit neque. Facilisis aliquam dolor habitant
                  commodo ultricies. Lacus pellentesque ultricies viverra
                  curabitur at fermentum tincidunt aliquet. Mi congue sed turpis
                  ligula egestas odio tincidunt libero vitae. Amet pellentesque
                  aliquam quam viverra proin urna vitae egestas turpis. Enim,
                  dictum nisl, dictum sed velit. Aliquam dignissim orci auctor
                  ipsum ac ultrices at. Et, nisl, egestas id eget. Nisl diam et
                  scelerisque at consectetur.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.map}>
          {" "}
          <div className={styles["map-container"]}>
            <img src={map} alt="map" />
          </div>
          <div>
            <div className={styles.icons}>
              <img src={MapVector} alt="map" />{" "}
              <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
            </div>
            <div className={styles.icons}>
              <img src={PhoneVector} alt="phone" />
              <span>(208) 555-0112</span>
            </div>
            <div className={styles.icons_box}>
              <span>
                <img src={FbVector} alt="facebook" />
              </span>
              <span>
                {" "}
                <img src={IgVector} alt="instagram" />
              </span>
              <span>
                {" "}
                <img src={TwitterVector} alt="twitter" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
