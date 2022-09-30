import { Card } from 'antd';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions/action';
import { StarButtom } from './StarButtom';

const PokemonCard = ({ name, sprites, types, id, favorite }) => {
  const dispatch = useDispatch();

  const typesString = types.map((item) => item.type.name).join(', ');
  const handleFavorite = () => dispatch(setFavorite({ pokemonId: id }));
  return (
    <Card
      title={name}
      cover={<img src={sprites.back_default} alt={name} />}
      extra={<StarButtom isFavorite={favorite} click={handleFavorite} />}
    >
      <Card.Meta description={typesString} />
    </Card>
  );
};

export default PokemonCard;
