import Slider from "../slideItems/Slider";
import SlideCard from "../slideItems/SlideCard";
import { useGetEventCategoriesQuery } from "../../GraphQl/graphql";
import { useEffect, useState } from "react";
import { EventCategoryEntity, EventEntity } from "../home/Test";

const Events = () => {
  const [categoriesData, setCategoriesData] = useState<
    EventCategoryEntity | any
  >();

  const result = useGetEventCategoriesQuery();

  useEffect(() => {
    if (result.data) {
      // setCategoriesData(result?.data?.getEventCategories?.result);
      setCategoriesData(result?.data?.getEventCategories?.result);
    }
  }, [result.data]);

  return (
    <div className="p-4 m-auto">
      {categoriesData?.map((category: EventCategoryEntity) => {
        return (
          <div key={category.id}>
            <p className="mb-3 mt-3">{category?.name}</p>
            {category?.events?.map((el: any) => {
              console.log(new Date(el.schedules[0].startDate).getFullYear());
              return (
                <Slider className="-mx-4" key={el?.id}>
                  <SlideCard
                    eventName={el?.name}
                    location={`${el?.address?.street}, ${el?.address?.houseNumber}, ${el?.address?.place}`}
                    date={el?.schedules[el.schedules.length - 1]?.startDate}
                    route={"#"}
                    imgUrl={el?.titleImage?.id}
                  />
                </Slider>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Events;
