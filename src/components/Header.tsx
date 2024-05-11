"use client";

import logo from "@/assets/Employ-logo-cor-fundo-branco.png";
import Image from "next/image";
import { ButtonLinkMenu } from "./ButtonLinkMenu";
import { ButtonVenda } from "./ButtonVenda";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export function Header() {
  const [isClick, setIsClick] = useState(false);
  const toggleNavBar = () => {
    setIsClick(!isClick);
  };
  return (
    <header>
      <div className="flex gap-1 justify-between items-center w-full h-16 bg-primary-green py-1 px-2">
        <div>
          <Image className="w-28" src={logo} alt="Logo" />
        </div>
        <div
          className="hidden md:flex flex-grow justify-between
                    tracking-wider max-w-[35em] font-semibold"
        >
          <ButtonLinkMenu name={"SOLUÇÕES"} />
          <ButtonLinkMenu name={"PREÇO"} />
          <ButtonLinkMenu name={"DEMONSTRAÇÃO"} />
          <ButtonLinkMenu name={"SOBRE"} />
        </div>
        <div className="hidden md:flex">
          <ButtonVenda />
        </div>
        <button className="md:hidden" onClick={toggleNavBar}>
          {isClick ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
      {isClick && (
          <div
            className="flex flex-col tracking-wider font-semibold border-t-2"
          >
            <ButtonLinkMenu name={"SOLUÇÕES"} />
            <ButtonLinkMenu name={"PREÇO"} />
            <ButtonLinkMenu name={"DEMONSTRAÇÃO"} />
            <ButtonLinkMenu name={"SOBRE"} />
            <div className="p-2 border-b-2 border-black flex justify-center">
                <ButtonVenda />
            </div>
          </div>
      )}
    </header>
  );
}
