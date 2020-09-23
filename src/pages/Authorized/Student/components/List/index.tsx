import React from 'react';
import { FiClipboard } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { ListStudents, ItemStudent, Infos, Name, Description } from './styled';

import { ListProps } from './interface';
import CheckButton from '../../../../../components/CheckButton';

const List: React.FC<ListProps> = ({ list }) => {
  return (
    <ListStudents>
      {list &&
        list.map(({ id, name, email, fone }) => {
          return (
            <ItemStudent key={id}>
              <Infos>
                <Name>{name}</Name>
                <Description>{email}</Description>
                <Description>{fone}</Description>
              </Infos>
              <Infos>
                <Link
                  to={`/authorized/student/${id}`}
                  title={`Editar dados de ${name}`}
                >
                  <FiClipboard />
                </Link>
              </Infos>
            </ItemStudent>
          );
        })}
    </ListStudents>
  );
};

export default List;
