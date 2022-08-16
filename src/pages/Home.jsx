import React from "react";
import styled from "styled-components";
import Users from "./user/Users";

function Home() {
  return (
    <>
      <Container className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">DATA TABLE</h1>
        <ContainerContent className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <Tabela className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Phone
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {Users.map((data, index) => (
                      <tr
                        key={index}
                        className="bg-white border-b-2 border-black"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                          {index + 1}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.name}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.email}
                        </td>
                        <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                          {data.phone}
                        </td>
                        <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                          <Link
                            to={`/users/${data.id}`}
                            className="bg-teal-600 text-white px-6 py-2 rounded-lg"
                          >
                            VIew
                          </Link>
                          <Link
                            to={`/edit-user/${data.id}`}
                            className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                          >
                            Edit
                          </Link>
                          <Link
                            onClick={() => deleteUser(data.id)}
                            to={"#"}
                            className="bg-red-600 text-white px-6 py-2 rounded-lg"
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Tabela>
              </div>
            </div>
          </div>
        </ContainerContent>
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 2rem 2.5rem;
  margin-top: 2rem;

  h1 {
    font-size: 1.8rem;
    font-weight: 54;
  }
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;

  div {
    overflow: 0 auto;
    margin-top: 2rem;
    align-items: center;

    div {
      //py-4 inline-block min-w-full sm:px-6 lg:px-8
      padding: 1rem 0;
      display: inline-block;
      min-width: 100%;

      div {
        overflow: hidden;
      }
    }
  }
`;

const Tabela = styled.table`
  //min-w-full text-center
  width: 100%;
  text-align: center;

  thead {
    border-bottom: #1f2937;

    tr {
      th {
        // text-sm font-medium text-white px-6 py-4

        font-weight: 500;
        color: fff;
        padding: 1rem 1.5rem;
      }

      tbody {
        border-bottom: black 0.5rem;
      }
    }
  }
`;

export default Home;
