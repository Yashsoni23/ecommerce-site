import React from "react";
import Cards from "../../components/Card";
import { Grid, Box, Flex, Image } from "@chakra-ui/react";
import { useInfiniteQuery } from "react-query";
import { fetchProductList } from "../../api.js";

function Products() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("products", fetchProductList, {
    getNextPageParam: (lastGroup, allGroups) => {
      const morePagesExist = lastGroup?.length === 12;

      if (!morePagesExist) {
        return;
      } else {
        return allGroups.length + 1;
      }
    },
  });

  // if (status === "loading") return "Loading...";

  // if (status === "error") return "An error has occurred: " + error.message;

  return (
    <div>
      <div className="products gap-3 d-flex">
        <Image
          src={"/Kites.jpeg"}
          alt="Product"
          borderRadius="lg"
          loading="lazy"
          boxSize={300}
          objectFit="cover"
        />{" "}
        &nbsp;
        <Image
          src={"/Lights.jpeg"}
          alt="Product"
          borderRadius="lg"
          loading="lazy"
          boxSize={300}
          objectFit="cover"
        />
        &nbsp;
        <Image
          src={"/Sweets.jpeg"}
          alt="Product"
          borderRadius="lg"
          loading="lazy"
          boxSize={300}
          objectFit="cover"
        />
        {/* <Grid templateColumns="repeat(3,1fr)" gap={4}>
          {data.pages.map((group, i) => (
            <React.Fragment key={i}>
              {group.map((item) => (
                <Box w="100%" key={item._id}>
                  <Cards item={item} />
                </Box>
              ))}
            </React.Fragment>
          ))}
        </Grid> */}
      </div>
      <Flex mt="10" justifyContent="center">
        {/* <Button
          onClick={() => fetchNextPage()}
          isLoading={isFetchingNextPage}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}
        </Button> */}
        <image src="Kites.jpeg/" />
      </Flex>
    </div>
  );
}

export default Products;
