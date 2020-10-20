import React from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import {
  ListConsultingTypes,
  ItemConsultingType,
  HeaderConsultingType,
  Description,
} from './styled';

import { IList } from './interface';

const List: React.FC<IList> = ({ list }) => {
  return (
    <ListConsultingTypes>
      {list &&
        list.map(({ consultingTypeId, description }) => (
          <ItemConsultingType key={consultingTypeId}>
            <HeaderConsultingType>
              <Description>{description}</Description>
              <Link
                to={`/consultingType/update/${consultingTypeId}`}
                title={`Editar dados do tipo de consultoria`}
              >
                <FiEdit />
              </Link>
            </HeaderConsultingType>
          </ItemConsultingType>
        ))}
    </ListConsultingTypes>
  );
};

export default List;
