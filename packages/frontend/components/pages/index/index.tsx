import React from "react";
import { withApollo, useSubscription } from "react-apollo";
import gql from "graphql-tag";
import { Stack, Box } from "@chakra-ui/core";

const fetchUsersSubscription = gql`
  subscription {
    user {
      id
    }
  }
`;

const Index = () => {
  const { data, loading, error } = useSubscription(fetchUsersSubscription);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Stack spacing={4}>
      {data.user.map((user: { id: number }) => {
        return <Box key={user.id}>{user.id}</Box>;
      })}
    </Stack>
  );
};

export default withApollo(Index);