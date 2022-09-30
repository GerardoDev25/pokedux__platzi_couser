import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';


const PokemonCard = ({name, sprites}) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src={sprites.back_default}
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Card.Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
