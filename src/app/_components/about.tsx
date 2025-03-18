import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";
import { Check, MapPin, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="zoom-in-left">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto do cachorro e gato"
                quality={100}
                fill
                className="object-cover hover:scale-105 duration-300"
                priority
              />
            </div>

            <div
              className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg border-4 border-white overflow-hidden"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <Image
                src={about2Img}
                alt="Foto do gato laranja"
                quality={100}
                fill
                priority
              />
            </div>
          </div>

          <div className="space-y-6 mt-10" data-aos="zoom-in-right">
            <h2 className="text-4xl font-bold">SOBRE</h2>

            <p>
              Até que alguém tenha amado um animal, uma parte da alma permanece
              adormecida. Acreditamos nisso e acreditamos no fácil acesso a
              coisas que são boas para nossa mente, corpo e espírito. Com uma
              oferta inteligente, suporte excelente e um checkout seguro, você
              está em boas mãos.
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Atuando desde 2016
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Equipe com profissionais experientes e dedicados
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" />
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
              <a
                data-aos="fade-up"
                data-aos-delay="600"
                href={`https://wa.me/54996615894?text=Olá vim pelo site e gostaria de mais informações`}
                target="_blank"
                className="bg-[#e84c3d] rounded-md px-4 py-2 flex items-center justify-center gap-2 text-white w-fit text-base font-semibold"
              >
                <WhatsappLogo className="w-5 h-5 text-white" />
                Contato via WhatsApp
              </a>

              <a
                href="#"
                className="rounded-md px-4 py-2 flex items-center justify-center gap-2 w-fit text-base font-semibold"
              >
                <MapPin className="w-5 h-5 text-black" />
                Endereço da loja
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
