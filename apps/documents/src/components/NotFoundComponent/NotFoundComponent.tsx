type Props = {
  queryParam: string;
};

function NotFoundComponent({ queryParam }: Props) {
  return <div>찾을 수 없는 컴포넌트 입니다. [ {queryParam} ]</div>;
}

export default NotFoundComponent;
