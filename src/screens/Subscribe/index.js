/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import { useNavigate } from 'react-router-dom';
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
  const { user } = useContext(UserContext);
  const headers = useAuthConfig();

  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [plans, setPlans] = useState([]);
  const [states, setStates] = useState([]);
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
    getPlans().then((res) => setPlans(res.data));
    getStates().then((res) => {
      setStates(res.data);
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
      .then((res) => {
        navigate('/details');
        console.log(res.status);
      })
      .catch((err) => console.log(err.response.status));
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
                hideSelectedOptions
                onChange={(e) => {
                  setSelectedPlan({ id: e.value, name: e.label });
                }}
                options={planOptions}
              />
              <Select
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
            <S.BlueButton onClick={() => makeSubscription()} type="button">
              Finalizar
            </S.BlueButton>
          </>
        )}
      </div>
    </S.Subscribe>
  );
}
