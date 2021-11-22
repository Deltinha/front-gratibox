/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

import GreetingText from '../../components/GreetingText';
import UserContext from '../../contexts/userContext';
import * as S from './style';
import image from '../../assets/image03.jpg';
import {
  getPlans,
  getProducts,
  getStates,
  postSubscription,
} from '../../services/subscription';
import useAuthConfig from '../../hooks/useAuth';

export default function Subscribe() {
  const { user, setUser } = useContext(UserContext);
  const headers = useAuthConfig();

  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [plans, setPlans] = useState([]);
  const [products, setProducts] = useState([]);
  const [planOptions, setPlanOptions] = useState([]);
  const [daysOptions, setDaysOptions] = useState([]);
  const [statesOptions, setStatesOptions] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({ id: 0, name: '' });
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [nextDisabled, setNextDisabled] = useState(true);
  const [recipient, setRecipient] = useState('');
  const [address, setAddress] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [stateId, setStateId] = useState(0);
  const weekDays = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ];
  const navigate = useNavigate();

  useEffect(() => {
    if (JSON.stringify(user) === JSON.stringify({})) {
      Swal.fire('Você não está logado');
      navigate('/login');
    }

    if (user.isSubscribed === true) {
      navigate('/details');
    }
  }, []);

  useEffect(() => {
    getPlans().then((res) => setPlans(res.data));
    getStates().then((res) => {
      setStatesOptions(
        res.data.map((state) => ({
          value: state.id,
          label: state.name,
        }))
      );
    });
    getProducts().then((res) => setProducts(res.data));
  }, []);

  useEffect(() => {
    setPlanOptions(
      plans.map((plan) => ({
        value: plan.id,
        label: plan.name,
      }))
    );
  }, [plans]);

  useEffect(() => {
    const planIndex = plans.findIndex((plan) => plan.id === selectedPlan.id);
    if (plans.length > 0) {
      if (selectedPlan.name === 'semanal') {
        setDaysOptions(
          plans[planIndex].days.map((day) => ({
            value: day.deliveryDayId,
            label: weekDays[day.weekDay],
          }))
        );
      }
      if (selectedPlan.name === 'mensal') {
        setDaysOptions(
          plans[planIndex].days.map((day) => ({
            value: day.deliveryDayId,
            label: `dia ${day.day}`,
          }))
        );
      }
    }
    return false;
  }, [selectedPlan]);

  useEffect(() => {
    if (
      selectedDay !== 0 &&
      selectedPlan.name !== '' &&
      selectedProducts.length > 0
    ) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [selectedDay, selectedPlan, selectedProducts]);

  useEffect(() => {
    if (
      recipient.length !== 0 &&
      address.length !== 0 &&
      cep.length !== 0 &&
      stateId !== 0 &&
      city.length !== 0
    ) {
      setNextDisabled(false);
    } else {
      setNextDisabled(true);
    }
  }, [recipient, address, cep, stateId, city]);

  function selectProduct(productId) {
    const productIndex = selectedProducts.findIndex(
      (product) => productId === product
    );

    if (productIndex === -1) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(
        selectedProducts.filter((product) => product !== productId)
      );
    }
  }

  function processError(status) {
    if (status === 403) {
      Swal.fire('Você já está inscrito em um plano');
      navigate('/details');
    }
    if (status === 401) {
      Swal.fire('Houve um problema com sua sessão');
      setUser({});
      navigate('/login');
    }
    if (status === 400) {
      Swal.fire('Campos preenchidos incorretamente');
    }
  }

  function makeSubscription() {
    const body = {
      deliveryDayId: selectedDay,
      address,
      recipient,
      cep,
      city,
      stateId,
      productsIds: selectedProducts,
    };

    postSubscription({ headers, body })
      .then(() => {
        setUser(Object.assign(user, { isSubscribed: true }));
        navigate('/details');
      })
      .catch((err) => {
        processError(err.response?.status);
      });
  }

  return (
    <S.Subscribe>
      <GreetingText username={user.name}>
        “Agradecer é a arte de atrair coisas boas”
      </GreetingText>
      <div>
        <img src={image} alt="" />
        {isStep1 && (
          <>
            <S.Form>
              <Select
                className="plan-select-container"
                classNamePrefix="plan-select"
                hideSelectedOptions
                onChange={(e) => {
                  setSelectedPlan({ id: e.value, name: e.label });
                }}
                options={planOptions}
              />
              <Select
                className="plan-select-container"
                classNamePrefix="plan-select"
                hideSelectedOptions
                onChange={(e) => {
                  setSelectedDay(e.value);
                }}
                options={daysOptions}
              />
              <S.ProductsSelection>
                <span>Quero receber</span>
                <div>
                  {products.map((product) => (
                    <S.Product>
                      <input
                        onChange={() => selectProduct(product.id)}
                        name="products"
                        type="checkbox"
                        id={product.name}
                      />
                      <label htmlFor={product.name}>{product.name}</label>
                    </S.Product>
                  ))}
                </div>
              </S.ProductsSelection>
            </S.Form>
            <S.BlueButton
              disabled={nextDisabled}
              onClick={() => {
                setIsStep1(false);
                setIsStep2(true);
                setNextDisabled(true);
              }}
              type="button"
            >
              Próximo
            </S.BlueButton>
          </>
        )}
        {isStep2 && (
          <>
            <S.Form>
              <input
                type="text"
                placeholder="Nome completo"
                onChange={(e) => setRecipient(e.target.value)}
              />
              <input
                type="text"
                placeholder="Endereço de Entrega"
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="CEP"
                onChange={(e) => setCep(e.target.value)}
              />
              <S.CitySelection>
                <input
                  type="text"
                  placeholder="Cidade"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Select
                  hideSelectedOptions
                  onChange={(e) => setStateId(e.value)}
                  placeholder="Estado"
                  className="state-select-container"
                  classNamePrefix="state-select"
                  isSearchable
                  maxMenuHeight="100px"
                  options={statesOptions}
                />
              </S.CitySelection>
            </S.Form>
            <S.BlueButton
              disabled={nextDisabled}
              onClick={() => makeSubscription()}
              type="button"
            >
              Finalizar
            </S.BlueButton>
          </>
        )}
      </div>
    </S.Subscribe>
  );
}
