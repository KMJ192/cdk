type Props = {
  condition: boolean;
  children: React.ReactNode;
};

function When({ condition, children }: Props) {
  if (condition === true) {
    return children;
  }
  return null;
}

export default When;
