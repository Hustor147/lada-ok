import Fotogalerie from "../components/Fotogalerie";
import Modaling from "../components/Modaling";

const Home = () => {
  return (
    <div>
      {/* <h1>Home</h1> */}
      <p className="obsahZalozek">
        Už více jak 20let se specializujeme na výstabì a správì televizních,
        satelitních a kamerových rozvodù v individuálních rodinných nebo ve
        spoleèných bytových domech s rozvojem nových technologií. Jsme servisní
        partneøi satelitní a internetové televize skylink, freesat a telly.
        Nainstalujeme veškeré komponenty pro kvalitní pøíjem ( STA - DVBT2 /
        DVBS2 ). Pùsobíme v jihoèeském kraji, konkrétnì v okrese Tábor, ale
        instalace, renovace nebo servis provádíme také napøíklad v okrese
        Jihdøichùv Hradec, Pelhøimov, Èeské Budìjovice, Písek, Benešov apod.
        Našim cílem je spokojenost zákazníka a proto instalace, servis
        provádíme, odbornì, svìdomitì s precizním výsledkem.
      </p>

      {/* <Card
        style={{
          width: "18rem",
        }}
      >
        <img alt="Sample" src="./images/Logo.png" />

        <CardBody>
          <CardTitle tag="h5">sdsdsdsfsffds</CardTitle>
          <CardText>
            <p>jckcscsjbscjhsdhjbsv sjv sjvs</p>
          </CardText>
          <Button>
            <a href="Reference"> Button</a>
          </Button>
        </CardBody>
      </Card> */}
      {/* tady je v planu pridat fotky ktere se zvetsi doprostred obrazovky */}
      <div className="fotky"></div>

      {/* tri tlacitka Kamerový satelitní antenni */}
      <Modaling />
      <Fotogalerie />
    </div>
  );
};
export default Home;
