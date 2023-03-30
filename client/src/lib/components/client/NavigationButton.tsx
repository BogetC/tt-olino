import { useRouter } from "next/navigation";

type NavigationButtonProps = {
  href: string;
  children: any;
};

export const NavigationButton = (props: NavigationButtonProps) => {
  const { push } = useRouter();

  return (
    <button type="button" className="button" onClick={() => push(props.href)}>
      {props.children}
    </button>
  );
};
