import React from "react";
import { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

function Menu({ title, items }) {
  const [isOpen, setIsOpen] = useState(true);
  const windowWith = useWindowWidth();

  const toggleCollapse = () => {
    if (windowWith <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWith <= 768) {
      setIsOpen(false);
    }

    if (!isOpen && windowWith > 768) {
      setIsOpen(true);
    }
  }, [windowWith]);

  return (
    <section>
      <nav className="grid gap-y-2 md:gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg text-primary-brand-color flex items-center justify-between"
        >
          {title}
          <button className="grid md:hidden w-6 h-6 place-items-center rounded-xl bg-primary-brand-color bg-opacity-10 text-primary-brand-color">
            <span
              className={`transition-all transform ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <RiArrowDownSLine size={15} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-1 md:gap-y-2">
              {items.map((item, key) => (
                <li key={key}>
                  <a href="#" className="text-sm hover:text-brand-color">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}

export default Menu;
