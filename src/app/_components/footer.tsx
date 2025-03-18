import royal from "../../../public/royal.png";
import golden from "../../../public/golden.png";
import premier from "../../../public/premier.png";
import natural from "../../../public/royal.png";
import whiskas from "../../../public/whiskas.png";
import friskies from "../../../public/friskies.png";
import Image from "next/image";
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  XLogo,
  YoutubeLogo,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: premier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Friskies", logo: friskies },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold text-center mb-8" data-aos="fade-up-right">
            Nossos parceiros
          </h4>

          <div
            className="grid grid-cols-2 md:grid-cols-6 gap-8 mx-auto"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={150}
                  height={76}
                  quality={100}
                  style={{
                    width: "auto",
                    height: "auto",
                  }}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-5 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="mb-4">
              Cuidando do seu melhor amigo com amor e dedicação.
            </p>
            <div></div>
            <a
              data-aos="fade-up"
              data-aos-delay="300"
              href={`https://wa.me/54996615894?text=Olá vim pelo site e gostaria de mais informações`}
              target="_blank"
              className="flex bg-green-500 px-4 py-2 rounded-lg items-center gap-2 font-semibold w-fit"
            >
              <WhatsappLogo className="h-5 w-5" /> Contato via WhatsApp
            </a>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Contato</h3>
            <p>Email: petshodev@petshopdev.com</p>
            <p>Telefone: (xx) 99999-9999</p>
            <p>Endereço: Rua Salgado Filho, 2345</p>
            <p>Bairro Centro | Guaporé | RS</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Redes Sociais</h3>
            <div className="flex items-center gap-4">
              <a href="#" target="_blank">
                <FacebookLogo className="h-8 w-8 hover:text-yellow-200 hover:scale-110 duration-300" />
              </a>
              <a href="#" target="_blank">
                <InstagramLogo className="h-8 w-8 hover:text-yellow-200 hover:scale-110 duration-300" />
              </a>
              <a href="#" target="_blank">
                <XLogo className="h-8 w-8 hover:text-yellow-200 hover:scale-110 duration-300" />
              </a>
              <a href="#" target="_blank">
                <YoutubeLogo className="h-8 w-8 hover:text-yellow-200 hover:scale-110 duration-300" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
