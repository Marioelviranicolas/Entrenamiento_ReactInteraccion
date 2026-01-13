import { CardEnt1 } from '../CardEnt1';
import avatar from '../../assets/img/avatar.png'; 

export const Entrenamiento1 = () => {
  return (
    <CardEnt1 
      nombre="Mario"
      apellidos="Elvira"
      edadInicial={24}
      imagen={avatar}
    />
  );
};

