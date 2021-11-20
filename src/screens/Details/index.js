import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import UserContext from '../../contexts/userContext';
import * as S from './style';
import image from '../../assets/image03.jpg';
import { getSubscription } from '../../services/subscription';
import useAuthConfig from '../../hooks/useAuth';

export default function Details() {
  const { user, setUser } = useContext(UserContext);
  const [plan, setPlan] = useState('');
  const [subscriptionDate, setSubscriptionDate] = useState('');
  const [nextDeliveries, setNextDeliveries] = useState([]);
  const [products, setProducts] = useState([]);
  const headers = useAuthConfig();
  const navigate = useNavigate();

  function processSuccess(res) {
    if (res.status === 204) {
      Swal.fire('Você não assinou nenhum plano');
      navigate('/plans');
    }
    if (res.status === 200) {
      setPlan(res.data.plan);
      setSubscriptionDate(res.data.subscriptionDate);
      setNextDeliveries(res.data.nextDeliveries);
      setProducts(res.data.products);
    }
  }

  function processError(status) {
    if (status === 401) {
      Swal.fire('Houve um problema com sua sessão');
      setUser({});
      navigate('/login');
    }
  }

  useEffect(() => {
    getSubscription(headers)
      .then((res) => processSuccess(res))
      .catch((err) => processError(err.response.status));
  }, []);

  return (
    <S.Details>
      <h2>Bom de ver por aqui, {user.name}</h2>
      <h3>“Agradecer é a arte de atrair coisas boas”</h3>
      <div>
        <img src={image} alt="" />
        <S.PlanDescription>
          <li>
            Plano: <span>{plan}</span>
          </li>
          <li>
            Data de assinatura:{' '}
            <span>{dayjs(subscriptionDate).format('DD/MM/YY')}</span>
          </li>
          <li>
            Próximas entregas:{' '}
            <S.NexdDeliveriesDate>
              {nextDeliveries.map((date) => (
                <span>{dayjs(date).format('DD/MM/YYYY')}</span>
              ))}
            </S.NexdDeliveriesDate>
          </li>
        </S.PlanDescription>
        <S.Products>
          {products.map((product) => (
            <span>{product}</span>
          ))}
        </S.Products>
      </div>
    </S.Details>
  );
}
