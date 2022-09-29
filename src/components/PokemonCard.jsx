import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';


const PokemonCard = ({name, url}) => {
  return (
    <Card
      title={name}
      cover={
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
          alt="Ditto"
        />
      }
      extra={<StarOutlined />}
    >
      <Card.Meta description="fire, magic" />
    </Card>
  );
};

export default PokemonCard;
