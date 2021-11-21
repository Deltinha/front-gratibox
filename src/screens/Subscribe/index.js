/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Select from 'react-select';
import GreetingText from '../../components/GreetingText';
import UserContext from '../../contexts/userContext';
import * as S from './style';
import image from '../../assets/image03.jpg';
import { getPlans, getProducts, getStates } from '../../services/subscription';

export default function Subscribe() {
  const { user } = useContext(UserContext);

  const [isStep1, setIsStep1] = useState(true);
  const [isStep2, setIsStep2] = useState(false);
  const [plans, setPlans] = useState([]);
  const [states, setStates] = useState([]);
  const [products, setProducts] = useState([]);
  const [planOptions, setPlanOptions] = useState([]);
  const [daysOptions, setDaysOptions] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState({ id: 0, name: '' });
  const [selectedDay, setSelectedDay] = useState(0);
  const [nextEnabled, setNextEnabled] = useState(false);

  const selectedOptions = {};
  const weekDays = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado',
  ];

  useEffect(() => {
    getPlans().then((res) => setPlans(res.data));
    getStates().then((res) => setStates(res.data));
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
            <S.BlueButton type="button">Próximo</S.BlueButton>
          </>
        )}
      </div>
    </S.Subscribe>
  );
}
