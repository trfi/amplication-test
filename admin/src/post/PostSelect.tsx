import React, { useMemo } from "react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { SelectField, SelectFieldProps } from "@amplication/design-system";
import { Post } from "../api/post/Post";

type Data = Post[];

type Props = Omit<SelectFieldProps, "options">;

export const PostSelect = (props: Props) => {
  const { data } = useQuery<Data, AxiosError>("select-/api/posts", async () => {
    const response = await api.get("/api/posts");
    return response.data;
  });

  const options = useMemo(() => {
    return data
      ? data.map((item) => ({
          value: item.id,
          label: item.title && item.title.length ? item.title : item.id,
        }))
      : [];
  }, [data]);

  return <SelectField {...props} options={options} />;
};
