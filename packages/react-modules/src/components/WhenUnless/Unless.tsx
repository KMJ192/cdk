type Props = {
  condition: boolean;
  children: React.ReactNode;
};

function Unless({ condition, children }: Props) {
  if (condition === false) {
    return children;
  }
  return null;
}

export default Unless;
