require 'test_helper'

class ValidateControllerTest < ActionController::TestCase
  test "should get valid" do
    get :valid
    assert_response :success
  end

end
