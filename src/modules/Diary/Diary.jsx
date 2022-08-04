import DiaryDateCalendar from "./DiaryDateСalendar/DiaryDateСalendar";
import DiaryAddProductForm from "./DiaryAddProductForm/DiaryAddProductForm";
import DiaryProductsList from "./DiaryProductsList";
import CircleButton from "../../shared/components/CircleButton/CircleButton";
import { getInfoForDay } from "../../shared/services/API/day";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setSummary } from "../../redux/summary/summary-slice";
import styles from "./diary.module.scss";

const Diary = () => {
  const [state, setState] = useState({
    data: "",
    dayId: null,
    eatenProducts: [],
    daySummary: {},
    loading: false,
    error: null,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (Object.keys(state.daySummary).length > 0) {
      console.log(state.daySummary);
      dispatch(setSummary(state.daySummary));
    }
  }, [dispatch, state.daySummary]);

  const addNewProduct = (productData) => {
    const { id, weight } = productData;
    const { data } = state;
    const updatedWeight = Number(weight);
    console.log({ productId: id, weight: updatedWeight, date: data.date });
  };

  const deleteItem = (id) => {
    const data = {
      dayId: state.dayId,
      eatenProductId: id,
    };
    // dispatch(operation(data))
    // отфильтровать текущий state
    console.log(data);
  };

  const fetchDayInfo = async (data) => {
    setState((prevState) => ({
      ...prevState,
      data,
      loading: true,
      error: null,
    }));

    try {
      const result = await getInfoForDay(data);
      const {
        id,
        daySummary: { kcalLeft, kcalConsumed, dailyRate, percentsOfDailyRate },
        eatenProducts,
      } = result;

      setState((prevState) => ({
        ...prevState,
        dayId: id,
        eatenProducts: [...eatenProducts],
        daySummary: {
          kcalLeft: kcalLeft,
          kcalConsumed: kcalConsumed,
          dailyRate: dailyRate,
          percentsOfDailyRate: percentsOfDailyRate,
        },
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        error: error.message,
        loading: false,
      }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <DiaryDateCalendar fetchDayInfo={fetchDayInfo} />
      <DiaryAddProductForm onSubmit={addNewProduct} />
      <DiaryProductsList
        eatenProducts={state.eatenProducts}
        onClick={deleteItem}
      />

      <CircleButton type="button" label="Add product button" mobile={true} />
    </div>
  );
};

export default Diary;
