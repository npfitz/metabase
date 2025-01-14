import { getEngineNativeType } from "metabase/lib/engine";
import { Database } from "metabase-types/api";

export const getHasDataAccess = (databases: Database[]) => {
  return databases.some(d => !d.is_saved_questions);
};

export const getHasOwnDatabase = (databases: Database[]) => {
  return databases.some(d => !d.is_sample && !d.is_saved_questions);
};

export const getHasNativeWrite = (databases: Database[]) => {
  return databases.some(d => d.native_permissions === "write");
};

export const getHasDatabaseWithJsonEngine = (databases: Database[]) => {
  return databases.some(d => getEngineNativeType(d.engine) === "json");
};
