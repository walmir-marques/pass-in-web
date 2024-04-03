import { ComponentProps } from "react";

interface NavLinkProps extends ComponentProps<"a"> {
  children: string;
}

const NavLink = (props: NavLinkProps) => {
  return (
    <a {...props} className="text-sm font-medium">
      {props.children}
    </a>
  );
};

export default NavLink;
