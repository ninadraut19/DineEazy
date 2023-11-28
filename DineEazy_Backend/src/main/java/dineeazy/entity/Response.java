package dineeazy.entity;

public class Response<T> 
{
	private String status;
	private String error;
	T data;
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public T getData() {
		return data;
	}
	public void setData(T data) {
		this.data = data;
	}
	
	public static <S> Response<S> getSuccessResponse(S data) {
		Response<S> res = new Response<>();
		res.setStatus("Success");
		res.setData(data);
		return res;
	}
	
	@SuppressWarnings("rawtypes")
	public static Response getErrorResponse(String err)
	{
		Response res = new Response();
		res.setStatus("Error");
		res.setError(err);
		return res;
	}
}