type ButtonsGridProps = {
  children: any;
};

export const ButtonsGrid = (props: ButtonsGridProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-3">
      {props.children}
    </div>
  );
};
