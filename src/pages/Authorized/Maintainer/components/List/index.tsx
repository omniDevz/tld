import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  ListMaintainers,
  ItemMaintainer,
  HeaderMaintainer,
  Infos,
  Name,
  Description,
  LevelAcess,
} from './styled';

import { ListProps } from './interface';
import CheckButton from '../../../../../components/CheckButton';

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ListMaintainers>
      {list &&
        list.map(({ id, name, email, level }) => {
          const labelLevelAcess = level === 0 ? 'Administrador' : 'Professor';

          return (
            <ItemMaintainer key={id}>
              <HeaderMaintainer>
                <Infos>
                  <Name>{name}</Name>
                  <Description>{email}</Description>
                </Infos>
                <Infos>
                  <Link
                    to={`/authorized/maintainer/update/${id}`}
                    title={`Editar dados de ${name}`}
                  >
                    <FiEdit />
                  </Link>
                  <LevelAcess>{labelLevelAcess}</LevelAcess>
                </Infos>
              </HeaderMaintainer>
            </ItemMaintainer>
          );
        })}
    </ListMaintainers>
  );
};

export default List;
